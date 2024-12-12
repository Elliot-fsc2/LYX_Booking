// src/Modal.js
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useForm } from "@inertiajs/react";
import { Alert } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import utc from "dayjs/plugin/utc";

const Modal = ({ isOpen, onClose, service }) => {
  const tomorrow = dayjs().add(1, "day");
  const nineAM = dayjs().set("hour", 9).startOf("hour");
  const eightPM = dayjs().set("hour", 20).startOf("hour");
  dayjs.extend(utc);

  const { data, setData, post, errors } = useForm({
    service: service.id,
    date: tomorrow,
    time: nineAM,
    amount: service.price,
    branch: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    post(route("booking.store"), {
      service: service.id,
      date: data.date,
      time: data.time,
      amount: data.amount,
      branch: data.branch,
    });
  };
  const handleChange = (event) => {
    setData("branch", event.target.value);
  };

  const handleTimeChange = (event) => {
    const timeValue = event.target.value;

    // Parse the time as local time
    const localTime = dayjs(timeValue, "HH:mm");

    // Convert to UTC
    const utcTime = localTime.utc();

    const formattedTime = utcTime.format("HH:mm");
    setData("time", formattedTime);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg text-center font-semibold mb-4">Booking Form</h2>
        {errors.message && <Alert severity="error">{errors.message}</Alert>}
        <form onSubmit={handleSubmit}>
          <p className="text-lg font-bold mb-5 text-center">Service Details:</p>
          <div className="mb-4">
            <TextField
              id="outlined-read-only-input"
              defaultValue={service.name}
              fullWidth
              slotProps={{
                input: {
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start" className="font-bold">
                      Service:{" "}
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
          <div className="mb-4">
            <TextField
              id="outlined-read-only-input"
              defaultValue={service.price}
              fullWidth
              slotProps={{
                input: {
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start" className="font-bold">
                      Price:{" "}
                    </InputAdornment>
                  ),
                },
              }}
            />
            {errors.amount && <p className="text-red-500">{errors.amount}</p>}
          </div>
          <div className="mb-4">
            <TextField
              id="outlined-read-only-input"
              defaultValue={`${service.duration} minutes`}
              fullWidth
              slotProps={{
                input: {
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start" className="font-bold">
                      Duration:{" "}
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
          <div className="mb-4">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="branch">Branch</InputLabel>
              <Select
                labelId="branch"
                value={data.branch}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Dasmarinas">Dasmarinas Branch</MenuItem>
                <MenuItem value="Imus">Imus Branch</MenuItem>
                <MenuItem value="Luzviminda">Luzviminda Branch</MenuItem>
              </Select>
            </FormControl>
            {errors.branch && <p className="text-red-500">{errors.branch}</p>}
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker", "TImePicker"]}>
              <div className="mb-4">
                <DemoItem label="Select Date">
                  <DatePicker
                    minDate={tomorrow}
                    value={data.date}
                    views={["year", "month", "day"]}
                    onChange={(newValue) => setData("date", newValue)}
                  />
                  {errors.date && <p className="text-red-500">{errors.date}</p>}
                </DemoItem>
              </div>
              <div className="mb-4">
                <DemoItem label="Select Time">
                  <TimePicker
                    defaultValue={data.time}
                    maxTime={eightPM}
                    minTime={nineAM}
                    onChange={handleTimeChange}
                  />
                  {errors.time && <p className="text-red-500">{errors.time}</p>}
                </DemoItem>
              </div>
            </DemoContainer>
          </LocalizationProvider>
          <div className="flex justify-end mt-5 ">
            <button
              type="submit"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
