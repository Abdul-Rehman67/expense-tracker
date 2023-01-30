import {React,useState} from "react";
import Cards from "../components/Cards";
import Table from "../components/Table";
import ChartComponent from "../components/Chart";
import ModalComponent from "../components/modals/CreateTransactionModal";
import EditBalanceModal from "../components/modals/EditBalanceModal";
import { useEffect } from "react";
const Dashboard = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [data,setData]=useState({
    userId:'',
    userhaveMoneyIn:[],
});
useEffect(()=>{
    setData({
        userId: '',
        userhaveMoneyIn: [
            {name:'savings',amount:5000},
            {name:'account',amount:6000},
            {name:'cash',amount:5000},
        ]
    });
    },[])
  const handleTransactionModalOpen = () => {
    setIsTransactionModalOpen(true);
  };
  const handleBalanceModalOpen = () => {
    setIsBalanceOpen(true);
  };
  const handleModalClose = () => {
    setIsTransactionModalOpen(false);
    setIsBalanceOpen(false)
  }


  return (
    <>
      <div class="bg-gray-100 h-[100vh]">
        <div className="flex justify-between">
          <div>
            <h1 class="md:text-4xl text-xl font-normal leading-normal px-5">
              Expense Tracker
            </h1>
          </div>
          <div className="flex gap-1 mt-1 mr-[0.1px] sm:mr-5">
            <button
              type="button"
              onClick={handleTransactionModalOpen}
              class="bg-blue-500 rounded w-full md:text-md text-xs"
            >
               Create Transaction
            </button>
            <button
              type="button"
              onClick={handleBalanceModalOpen}
              class="bg-blue-500 rounded w-full md:text-md text-xs"
            >
              Edit Balance
            </button>
          </div>
        </div>
        <div class="flex flex-wrap justify-between ">
          {data.userhaveMoneyIn.map(item=><Cards props={item}/>)}
        </div>
        <h1 class="md:text-4xl text-xl mt-2 font-normal leading-normal  mb-2  px-5">
          All Transactions
        </h1>
        <div className="flex flex-col px-5  mt-5 md:flex-row gap-1">
          <div className="w-full bg-white rounded shadow-lg">
            <Table />
          </div>
          <div className="bg-white rounded  shadow-lg justify-center">
            <ChartComponent />
          </div>
        </div>

        <div>
        <ModalComponent openModal={isTransactionModalOpen} handleClose={handleModalClose}/>
        </div>

        <div>
        <EditBalanceModal openModal={isBalanceOpen} handleClose={handleModalClose} data={data.userhaveMoneyIn}/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
