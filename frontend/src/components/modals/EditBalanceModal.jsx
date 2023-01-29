import { Button, Modal } from "antd";
import { useState } from "react";
import formData from "../../utils/transactionformfields";
const EditBalanceModal = ({ openModal, handleClose,data }) => {
  console.log(data);
  const [formData, setFormData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  let data1 = {
    userhaveMoneyIn: [
        {name:'savings',amount:5000},
        {name:'account',amount:6000},
        {name:'cash',amount:5000},
    ]
};

  const handleOk = () => {
    console.log(Object.keys(formData).length);
    console.log(formData);
    if (
      Object.keys(formData).some(
        (key) => formData[key] === "") || Object.keys(formData).length < 3
      
    ) {
        
      alert("all fields are required");
      return
    } else {
      //api call using store
    }
  };
  //for making text field to enter only number
  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);

    if (!/^\d+$/.test(keyValue)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const updatedData = data.map(item => {
      if (item.name === e.target.name) {
        return { ...item, amount: parseInt(e.target.value) }
      }
      return item;
    });
    setFormData(updatedData);
  };

  return (
    <>
      <Modal
        title="Edit Balance"
        open={openModal}
        onOk={handleOk}
        onCancel={handleClose}
        okButtonProps={{
          style: { color: "#ffff", background: "#1D4ED8" },
          disabled: disabled,
        }}
        okText={"Edit"}
      >
        { data.map(item=>
        <>
        <label>{item.name.toUpperCase()}</label>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name={item.name}
          placeholder={`Enter your ${item.name} amount `}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          defaultValue={item.amount}
        />
        </>
      
        )
}
       
      </Modal>
    </>
  );
};
export default EditBalanceModal;
