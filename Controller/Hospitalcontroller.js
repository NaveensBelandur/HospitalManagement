const { json } = require("express");
const DoctorModal = require("../Modal/Doctors");
const PatientModal = require("../Modal/Patients");
const Appoint = require("../Modal/appoint");

const Welcome = async (req, res) => {
  try {
    res.send("Hello World");
  } catch (err) {
    console.log(err);
  }
};

/* Doctor Modal */

const AddDoctor = async (req, res) => {
  try {
    const { name, speciality } = req.body;

    if (!name || !speciality) {
      throw new Error("name And Speciality Cannot be empty");
    }

    const SaveData = new DoctorModal({
      name: name,
      speciality: speciality,
    });

    const SaveDataPost = await SaveData.save();

    if (SaveDataPost) {
      res.status(200).json(SaveDataPost);
    } else {
      res.error("Data note Found");
    }
  } catch (err) {
    console.log(err);
  }
};

const FindAlldoctor = async (req, res) => {
  try {
    const FindAllDoctor = await DoctorModal.find();
    if (FindAllDoctor) {
      res.status(200).json(FindAllDoctor);
    }
  } catch (err) {
    console.log(err);
  }
};

const DeleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const DestroyDoctor = await DoctorModal.findByIdAndDelete(id);

    if (DestroyDoctor) {
      res.status(200).json("Deleted the Record SuccesFully");
    }
  } catch (err) {
    console.log(err);
  }
};

/* Patient Modal */

const AddPatientData = async (req, res) => {
  try {
    const { name, age, gender } = req.body;

    if (!name || !age || !gender) {
      res.status(404).json({
        message: "PatientField Cannot Be Empty",
      });
    }

    const SaveData = new PatientModal({
      name: name,
      age: age,
      gender: gender,
    });

    const SaveDataRes = await SaveData.save();

    if (SaveDataRes) {
      res.json(SaveDataRes);
    }
  } catch (err) {
    throw new Error("Data Error");
  }
};

const FindPatientData = async (req, res) => {
  try {
    const FindPatientData = await PatientModal.find();
    if (FindPatientData) {
      res.status(200).json(FindPatientData);
    }
  } catch (err) {
    throw new Error("Patient Data Error");
  }
};

const DeletePatientData = async (req, res) => {
  try {
    const id = req.params.id;
    const PatientDelete = await PatientModal.findByIdAndDelete(id);

    if (PatientDelete) {
      res.status(200).json("Delete Patient Data");
    }
  } catch (err) {
    console.log(err);
  }
};

/* Appoitment */
const Appoitment = async (req, res) => {
  try {
    const { patientName, doctorName, date, description } = req.body;

    const Saveappoitment = new Appoint({
      patientName,
      doctorName,
      description,
      date: new Date(),
    });

    const dateSave = await Saveappoitment.save();

    if (dateSave) {
      res.status(200).json(dateSave);
    } else {
      res.status(400).json("Data Not Saved");
    }
  } catch (err) {
    console.log(err);
  }
};

const GetAppoitment = async (req, res) => {
  try {
    const GetAllAppoiment = await Appoint.find();
    if (GetAllAppoiment) {
      res.status(200).json(GetAllAppoiment);
    } else {
      res.status(404).json({
        message: "Data not Found",
        error,
      });
    }
  } catch (Err) {
    console.log(Err);
  }
};

const DeleteAppoitment = async (req, res) => {
  try {
    const id = req.params.id;
    const DelteAppoitment = await Appoint.findByIdAndDelete(id);

    if (DeleteAppoitment) {
      res.status(200).json({ Message: "deleted SuccesFully" });
    } else {
      res.status(400).json([]);
    }
  } catch (Err) {
    console.log(Err);
  }
};

module.exports = {
  Welcome,
  AddDoctor,
  AddPatientData,
  FindAlldoctor,
  FindPatientData,
  DeleteDoctor,
  DeletePatientData,
  Appoitment,
  GetAppoitment,
  DeleteAppoitment,
};
