"use client";

import React from "react";
import style from "./page.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Loaders/loading";
import { motion } from "framer-motion";

const Appointments = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);
  const [deletee, setDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const DataFetch = async () => {
      const Data = await fetch("http://localhost:3060/Getappoitment");
      if (Data) {
        const sent = await Data.json();
        setLoading(false);
        setData(sent);
      }
    };

    DataFetch();
  }, [data, deletee]);

  const handleDelete = async (id) => {
    if (id) {
      const response = await fetch(
        `http://localhost:3060/deleteAppoitment/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const deletedData = await response.json();
        setDelete(true);
      } else {
        console.error("Failed to delete the appointment");
      }
    }
  };

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const FormData = {
        patientName: name,
        doctorName: age,
        description: gender,
      };

      const DataSend = await fetch("http://localhost:3060/Appoitment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      if (DataSend) {
        setName("");
        setGender("");
        setAge("");
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className={style.appoitments_container}>
        <form className={style.appoitments_card_container}>
          <div className={style.appoitments_fnt_container}>
            <h2 className={style.appoitments_fnt}>Add New Patients</h2>
          </div>
          <div className={style.form_container}>
            <label className={style.form_label}>PatientName:</label>
            <input
              className={style.form_input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="PatientName"
            />
            <label className={style.form_label}>DoctorName:</label>
            <input
              className={style.form_input}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="DoctorName"
            />
            <label className={style.form_label}>Description:</label>
            <input
              className={style.form_input}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div>
            <button className={style.form_btn} onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
        <div className={style.card_}>
          {loading ? (
            <Loading />
          ) : data?.length == 0 ? (
            <p>No Data Found....</p>
          ) : (
            data?.map((data) => {
              return (
                <div className={style.appoitments_second_container}>
                  <div className={style.appoitments_card_container_}>
                    <p className={style.appoitments_fnt}>
                      PatientName:{data.patientName}
                    </p>
                    <p className={style.appoitments_fnt}>
                      DoctorName:{data.doctorName}
                    </p>
                    <p className={style.appoitments_fnt}>
                      Description:{data.description}
                    </p>
                    <div className={style.appoitments_btn_container}>
                      <motion.button
                        className={style.appoitments_btn}
                        onClick={() => handleDelete(data._id)}
                      >
                        Delete
                      </motion.button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default Appointments;
