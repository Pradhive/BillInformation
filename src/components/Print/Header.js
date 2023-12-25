import Logo from "../../assests/Logo.jpeg";
import { Image } from "mui-image";
import MainDetails from "./MainDetails";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

function Header({
  show,
  setShow,
  name,
  address,
  date,
  advance,
  number,
  ship,
  time,
  total,
  list,
  billNo
}) {
  const handlePrint = async () => {
    setShow(false);
    setTimeout(() => window.print(), 100);
    setTimeout(() => setShow(true), 3000);
    
    try {
      const docRef = await addDoc(collection(db, "billData"), {
        name : name,
      address : address,
      date : date,
      advance : advance,
      number : number,
      ship : ship,
      time : time,
      total : total,
      list : list,
      billNo : billNo
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div className="text-sm" style={{ fontSize: "10px" }}>
          ஓம் நமசிவாய போற்றி
        </div>
        <div className="flex items-center justify-between w-full">
          <div>
            <Image src={Logo} width={120} height={120} />
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-wide text-2xl mb-3">
              அசோக் மெஸ்
            </h2>
            <MainDetails />
          </div>
        </div>

        {show && (
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li className="btn btn-print">
                <button
                  className="bg-gray-500 mt-5 text-white font-bold  py-1 px-2 rounded shadow-xl  border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
                  onClick={handlePrint}
                >
                  <PrintOutlinedIcon />
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
