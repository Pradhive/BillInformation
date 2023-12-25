import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  where,
  query,
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

export default function Listing({
  setName,
  setAddress,
  setNumber,
  setDate,
  setShip,
  setAdvance,
  setTime,
  setList,
  setBillNo
}) {
  const [data, setData] = useState([]);

  const [filterDate, setFilterDate] = useState("");
  const [filterName, setFilterName] = useState("");

  const fetchPost = async () => {
    let baseQuery = collection(db, "billData");
    let finalQuery = baseQuery;

    if (filterDate) {
      const dateTimestamp = moment(filterDate).format("YYYY-MM-DD");
      console.log(dateTimestamp);
      finalQuery = query(baseQuery, where("date", "==", dateTimestamp));
    }
    if (filterName) {
      console.log(filterName);
      finalQuery = query(baseQuery, where("name", "==", filterName));
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
    setBillNo(data?.billNo)
    navigation("/bill");
  };

  return (
    <div>
      <button
        className="bg-gray-500 mt-5 text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
        onClick={() => navigation("/")}
      >
        Home
      </button>
      <div>
        <TextField
          id="date"
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
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
                        className="text-blue-500 hover:bg-gray-300 rounded-full p-1 cursor-pointer"
                        onClick={() => handleClick(row)}
                      >
                        <VisibilityIcon />
                      </div>
                      <div
                        className="text-red-500 hover:bg-gray-300 rounded-full p-1 cursor-pointer"
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
