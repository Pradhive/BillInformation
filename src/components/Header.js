
import Logo from "../assests/Logo.jpeg"
import { Image } from 'mui-image'
import MainDetails from "./MainDetails";

function Header({show, setShow}) {

  const handlePrint = () => {
    setShow(false);
    setTimeout(()=>window.print(), 100);
    setTimeout(()=>setShow(true), 100);
  };

  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div className="text-sm" style={{ fontSize: "10px" }}>ஓம் நமசிவாய போற்றி</div>
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
                  className="bg-indigo-500 mt-5 text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition-all duration-300"
                  onClick={handlePrint}
                >
                  Print
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
