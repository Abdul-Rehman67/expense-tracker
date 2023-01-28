const formData = [
    {
      "type": "number",
    //   "label": "Amount",
      "id": "name",
      "placeholder": "Amount",
      "inputmode":"numeric",
    "pattern":"[0-9]*"
    },
    
    {
      "type": "select",
      "label": "Category",
      "id": "category",
      "options": [
        { "value": "", "label": "Select a category" },
        { "value": "gorceries", "label": "Groceries" }, 

        { "value": "other", "label": "Other"}
      ]
    },
    {
      "type": "select",
      "label": "paidfrom",
      "id": "paid from",
      "options": [
        { "value": "", "label": "Paid from?" },
        { "value": "cash", "label": "Cash" },
        { "value": "savings", "label": "Savings" },
        { "value": "account", "label": "Account" },

      ]
    },
    {
        "type": "textarea",
        "label": "",
        "id": "description",
        "placeholder": "Description"
      },
  ];
  export default formData