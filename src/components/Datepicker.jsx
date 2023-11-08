import React from "react";
import moment from "moment";
import { DatePicker, Space } from "antd";
import { toast } from "react-toastify";
const Datepicker = ({ setDate }) => {
  const now = moment().format("DD-MM-YYYY");
  const filterByDate = (dates) => {
    const date = moment(dates.$d).format("DD-MM-YYYY");
    if (now >= date) {
      toast.error("select upcoming date please");
      return;
    }
    if (now < date) {
      setDate(date);
    }
  };
  return (
    <Space direction="vertical">
      <DatePicker format="DD-MM-YYYY" onChange={filterByDate} />
    </Space>
  );
};
export default Datepicker;
