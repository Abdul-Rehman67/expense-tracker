import React from "react";
import Cards from "../components/Cards";
import Table from "../components/Table";
import ChartComponent from "../components/Chart";
import ModalComponent from '../components/Modal'
const Dashboard = () => {
  return (
    <>
      <div class="bg-gray-100 h-[100vh]">
        <div className="flex justify-between">
          <div>
            <h1 class="text-4xl font-normal leading-normal px-5">
              Expense Tracker
            </h1>
          </div>
          <div>
            <button
              type="button"
              class="inline-block px-6 py-2.5 mr-5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create Transaction
            </button>
          </div>
        </div>
        <div class="flex flex-wrap justify-between ">
          <Cards />
          <Cards />
          <Cards />
        </div>
        <h1 class="text-4xl font-normal leading-normal  mb-2  px-5">
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
        <ModalComponent/>

      </div>
      </div>
    </>
  );
};

export default Dashboard;
