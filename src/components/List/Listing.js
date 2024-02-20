import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TextField from "@mui/material/TextField";
import moment from "moment";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Logo from "../../assests/Logo.jpeg"

export default function Listing({
  setName,
  setAddress,
  setNumber,
  setDate,
  setShip,
  setAdvance,
  setTime,
  setList,
  setBillNo,
  setDiscount
}) {
  const [data, setData] = useState([]);

  const [filterDate, setFilterDate] = useState("");
  const [filterName, setFilterName] = useState("");

  const fetchPost = async () => {
    let baseQuery = collection(db, "billData");
    let finalQuery = baseQuery;
  
    // Order by "billNo" in descending order
    finalQuery = query(baseQuery, orderBy("billNo", "desc"));
  
    if (filterDate) {
      const dateTimestamp = moment(filterDate).format("YYYY-MM-DD");
      console.log(dateTimestamp);
      finalQuery = query(finalQuery, where("date", "==", dateTimestamp));
    }
    if (filterName) {
      console.log(filterName);
      finalQuery = query(finalQuery, where("name", "==", filterName));
    }
  
    await getDocs(finalQuery).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
      console.log(data, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, [filterDate, filterName]);

  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "billData", postId));
      setData((prevData) => prevData.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const navigation = useNavigate();

  const handleClick = (data) => {
    setName(data?.name);
    setAddress(data?.address);
    setNumber(data?.number);
    setDate(data?.date);
    setShip(data?.ship);
    setAdvance(data?.advance);
    setTime(data?.time);
    setList(data?.list);
    setBillNo(data?.billNo);
    setDiscount(data?.discount)
    navigation("/bill");
  };

  return (
    <div className="bg-[#1e1e1e] h-fit p-2 py-8 ani">
      <div className="flex items-center justify-between">
        <button
          className="text-white text-lg hover:tracking-widest font-bold rounded py-2 px-4 hover:bg-white hover:text-black transition-all duration-700"
          onClick={() => navigation("/")}
        >
          <ArrowBackIosOutlinedIcon />
          <HomeOutlinedIcon />
        </button>
        <div className="text-[20px] md:text-[30px] font-bold  flex items-center justify-center text-white ani">History</div>
        <img src={Logo} alt="" className="h-[8vh] w-[8vw] pr-10"/>
      </div>
      <div className="p-2 flex pt-6 space-x-4">
        <TextField
          id="date"
          type="date"
          value={filterDate}
          className="bg-white"
          onChange={(e) => setFilterDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          value={filterName}
          placeholder="Name"
          className="bg-white"
          onChange={(e) => setFilterName(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="p-2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="a dense table">
            <TableHead>
              <TableRow className="bg-gray-300" style={{ height: "20px" }}>
                <TableCell>Bill No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-gray-100"
                  style={{ height: "20px" }}
                >
                  <TableCell>{row?.billNo}</TableCell>
                  <TableCell>{row?.name}</TableCell>
                  <TableCell align="right">{row?.number}</TableCell>
                  <TableCell align="right">{row?.ship}</TableCell>
                  <TableCell align="right">{row?.date}</TableCell>
                  <TableCell align="right">{row?.total}</TableCell>
                  <TableCell align="right">
                    <div className="flex justify-around">
                      <div
                        className="text-gray-500 hover:bg-gray-300 rounded-full p-1 cursor-pointer"
                        onClick={() => handleClick(row)}
                      >
                        <VisibilityIcon />
                      </div>
                      <div
                        className="text-gray-500 hover:bg-gray-300 rounded-full p-1 cursor-pointer"
                        onClick={() => deletePost(row?.id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
