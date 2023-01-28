import { Button, Modal } from "antd";
import { useState } from "react";
import formData from "../utils/transactionformfields";
const ModalComponent = () => {
  const [otherOption, setOtherOption] = useState(false); //State to keep track of whether "Other" option is selected
  const [customValue, setCustomValue] = useState(""); //State to keep track of custom value entered in text field
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    if (event.target.id === "category" && event.target.value === "other") {
      setOtherOption(true);
    } else if (
      event.target.id === "category" &&
      event.target.value !== "other"
    ) {
      setOtherOption(false);
    }
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const handleCustomValue = (event) => {
    setCustomValue(event.target.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    console.log(form);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title="Create Transaction"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {formData.map((field) => {
          if (
            field.type === "text" ||
            field.type === "email" ||
            field.type === "number"
          ) {
            return (
              <div key={field.id}>
                {/* <label htmlFor={field.id}>{field.label}</label> */}
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  inputmode={field.type==="number"? field.inputmode:''}
                  pattern={field.type==="number" ? field.pattern:''}
                />
              </div>
            );
          } else if (field.type === "select" && field.id === "category") {
            return (
              <div key={field.id}>
                <select
                  id={field.id}
                  onChange={handleChange}
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                >
                  {field.options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      class="block border border-grey-light w-full p-3 rounded mb-4"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                {otherOption && (
                  <div>
                    {/* <label htmlFor="customValue">Enter custom value</label> */}
                    <input
                      type="text"
                      id="customValue"
                      onChange={handleCustomValue}
                      class="block border border-grey-light w-full p-3 rounded mb-4"
                      placeholder="Other"
                    />
                  </div>
                )}
              </div>
            );
          } else if (field.type === "select") {
            return (
              <div key={field.id}>
                <select
                  id={field.id}
                  onChange={handleChange}
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                >
                  {field.options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      class="block border border-grey-light w-full p-3 rounded mb-4"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else if (field.type === "textarea") {
            return (
              <label key={field.name}>
                {/* {field.label}: */}
                <textarea
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                />
              </label>
            );
          }
        })}
      </Modal>
    </>
  );
};
export default ModalComponent;
