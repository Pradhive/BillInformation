import React from "react";
import { useNavigate } from "react-router-dom";
import { Progress, Space } from "antd";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";

export default function Home({
  setName,
  setAddress,
  setNumber,
  setDate,
  setShip,
  setAdvance,
  setTime,
  setList,
  setBillNo,
}) {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    navigation("/bill");
    setName("");
    setAddress("");
    setNumber("");
    setDate("");
    setShip("");
    setAdvance("");
    setTime("");
    setList([]);
    setBillNo(data1.length + 1);
  };

  const fetchPost = async () => {
    let baseQuery = collection(db, "billData");
    let finalQuery = baseQuery;
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(1);
    const start = moment(startDate).format("YYYY-MM-DD");
    endDate.setMonth(endDate.getMonth() + 1, 0);
    const end = moment(endDate).format("YYYY-MM-DD");
    console.log(end);

    finalQuery = query(
      baseQuery,
      where("date", ">=", start),
      where("date", "<=", end)
    );

    await getDocs(finalQuery).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);

      console.log(data, newData);
    });

    await getDocs(baseQuery).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData1(newData);

      console.log(data, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  },[]);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < data.length; i++) {
      temp += data[i]?.total;
    }
    setTotal(temp);
  }, [data]);

  return (
    <div className="bg-black h-screen w-screen p-5 md:p-0">
      <div className="">
        <div>
          <div className="text-[30px] md:text-[100px] font-bold md:w-screen flex items-center justify-center text-white ani">
            Ashok Mess
          </div>
          <div className="text-[30px] md:text-[50px] font-bold md:w-screen flex items-center justify-center text-white ani">
            Uppiliyapuram
          </div>
        </div>
        <div className="md:hidden mt-10 md:mt-0">
          <Space wrap>
            <div className="flex flex-col justify-center items-center space-y-8">
              <div className="pro1 flex items-center space-x-8">
                <Progress
                  type="circle"
                  trailColor="white"
                  strokeColor="gray"
                  size={120}
                  percent={data.length}
                  format={(percent) => (
                    <div style={{ color: "white", fontSize: 42 }}>
                      {percent}
                    </div>
                  )}
                />
                <div className="text-white pt-5">Total Orders This Month</div>
              </div>
              <div className="pro2 flex items-center space-x-8">
                <Progress
                  type="circle"
                  trailColor="white"
                  strokeColor="gray"
                  size={120}
                  percent={total / 1000}
                  format={() => (
                    <div style={{ color: "white", fontSize: 19 }}>₹{total}</div>
                  )}
                />
                <div className="text-white pt-5">Total Amount This Month</div>
              </div>
            </div>
          </Space>
        </div>
        <div className="hidden md:block">
          <Space wrap>
            <div className="flex justify-around w-screen ">
              <div className="pro1">
                <Progress
                  type="circle"
                  trailColor="white"
                  strokeColor="gray"
                  size={190}
                  percent={data.length}
                  format={(percent) => (
                    <div style={{ color: "white", fontSize: 52 }}>
                      {percent}
                    </div>
                  )}
                />
                <div className="text-white pt-5">Total Orders This Month</div>
              </div>
              <div className="pro2">
                <Progress
                  type="circle"
                  trailColor="white"
                  strokeColor="gray"
                  size={190}
                  percent={total / 1000}
                  format={() => (
                    <div style={{ color: "white", fontSize: 32 }}>₹{total}</div>
                  )}
                />
                <div className="text-white pt-5">Total Amount This Month</div>
              </div>
            </div>
          </Space>
        </div>
        <div className="flex   justify-around mt-10">
          <div className="mt-10 ">
            <button
              className="text-white text-lg hover:tracking-widest font-bold w-[20vw] rounded py-2 hover:bg-white hover:text-black transition-all duration-700"
              onClick={() => navigation("/list")}
            >
              Listing
            </button>
          </div>
          <div className="mt-10 ">
            <button
              className="text-white text-lg hover:tracking-widest font-bold w-[20vw] rounded py-2 hover:bg-white hover:text-black transition-all duration-700"
              onClick={handleClick}
            >
              Billing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
