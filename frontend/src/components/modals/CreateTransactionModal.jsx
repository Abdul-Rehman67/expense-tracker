import { Button, Modal } from "antd";
import { useState } from "react";
import formData from "../../utils/transactionformfields";
import EditBalanceModal from "./EditBalanceModal";
const ModalComponent = ({ openModal, handleClose }) => {
  console.log(openModal);
  const [formData, setFormData] = useState({});
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [disabled, setDisabled] = useState(false);

  const categoryOptions = [
    { name: "Cash", value: "cash" },
    { name: "Savings", value: "savings" },
    { name: "Account", value: "account" },
  ];
  const typeOptions = [
    { name: "Cash", value: "cash" },
    { name: "Savings", value: "savings" },
    { name: "Account", value: "account" },
  ];

  const handleOk = () => {
    console.log(formData);
    if (
      Object.keys(formData).some(
        (key) =>
          formData[key] === "" ||
          Object.keys(formData).length < (formData.category === "other" ? 6 : 5)
      )
    ) {
      alert("all fields are required");
    }
    else{
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
    if (e.target.name === "category" && e.target.value === "other") {
      setShowCustomCategory(true);
      console.log("in if ");
    } else {
      setShowCustomCategory(false);
      console.log("in else");
    }
    if (e.target.name === "customCategory") {
      setShowCustomCategory(true);
      const lowerCaseValue = e.target.value.toLowerCase();
      const matchingOption = categoryOptions.find(
        (option) =>
          option.value.toLowerCase() === lowerCaseValue ||
          option.name.toLowerCase() === lowerCaseValue
      );
      if (matchingOption) {
        alert("This category already exists in the dropdown");
        setDisabled(true);
        return;
      } else {
        setDisabled(false);
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Modal
        title="Create Transaction"
        open={openModal}
        onOk={handleOk}
        onCancel={handleClose}
        okButtonProps={{
          style: { color: "#ffff", background: "#1D4ED8" },
          disabled: disabled,
        }}
        okText={"Create"}
      >
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="amount"
          placeholder="Amount"
          pattern="[0-9]*"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="textarea"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="descriptios"
          placeholder="Description"
          onChange={handleChange}
        />
        <select
          name="type"
          onChange={handleChange}
          defaultValue={currentData.type}
          class="block border border-grey-light w-full p-3 rounded mb-4"
        >
          <option value="">Select Type</option>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        <select
          name="category"
          onChange={handleChange}
          defaultValue={currentData.category}
          class="block border border-grey-light w-full p-3 rounded mb-4"
        >
          <option value="">Select Category</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
          <option value="other">Other</option>
        </select>

        {showCustomCategory && (
          <input
            placeholder="Enter Category"
            type="text"
            name="customCategory"
            onChange={handleChange}
            defaultValue={currentData.category}
            class="block border border-grey-light w-full p-3 rounded mb-4"
          />
        )}
      </Modal>
    </>
  );
};
export default ModalComponent;
