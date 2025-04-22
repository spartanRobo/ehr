import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  Card,
  Avatar,
  Badge,
  Divider,
} from "@innovaccer/design-system";

const PatientProfile = ({ selectedPatient }) => {
  const [encId, setEncId] = useState(Math.floor(Math.random() * 1e10));

  useEffect(() => {
    document.title = `Practice Fusion - ${selectedPatient.name}`;
  }, [selectedPatient.name]);

  const patient = {
    ...selectedPatient,
    id: "P-123456789",
    gender: "Female",
    phone: "(555) 123-4567",
    email: "jane.doe@example.com",
    address: "1234 Wellness Blvd, Healthytown, CA 90210",
    allergies: [
      { substance: "Penicillin", type: "Drug", severity: "Severe" },
      { substance: "Peanuts", type: "Food", severity: "Moderate" },
      { substance: "Dust", type: "Environmental", severity: "Mild" },
    ],
    insurance: "HealthCare Plus PPO",
    policyNumber: "HCP-4455-8889",
    pcp: "Dr. Meredith Grey",
    lastVisit: "2024-12-10",
    vitals: {
      height: "5'6\"",
      weight: "132 lbs",
      bp: "120/80",
      pulse: "72 bpm",
      temp: "98.6°F",
    },
    medicalHistory: ["Asthma", "Hypertension", "Migraines"],
    currentMedications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Albuterol", dosage: "Inhaler", frequency: "As needed" },
    ],
    labResults: [
      { test: "Complete Blood Count", result: "Normal", date: "2024-12-01" },
      { test: "Cholesterol", result: "200 mg/dL", date: "2024-12-01" },
      { test: "Blood Glucose", result: "95 mg/dL", date: "2024-12-01" },
      { test: "Complete Blood Count", result: "Normal", date: "2024-12-01" },
      { test: "Cholesterol", result: "200 mg/dL", date: "2024-12-01" },
      { test: "Blood Glucose", result: "95 mg/dL", date: "2024-12-01" },
      { test: "Complete Blood Count", result: "Normal", date: "2024-12-01" },
      { test: "Cholesterol", result: "200 mg/dL", date: "2024-12-01" },
      { test: "Blood Glucose", result: "95 mg/dL", date: "2024-12-01" },
      { test: "Complete Blood Count", result: "Normal", date: "2024-12-01" },
      { test: "Cholesterol", result: "200 mg/dL", date: "2024-12-01" },
      { test: "Blood Glucose", result: "95 mg/dL", date: "2024-12-01" },
      { test: "Complete Blood Count", result: "Normal", date: "2024-12-01" },
      { test: "Cholesterol", result: "200 mg/dL", date: "2024-12-01" },
      { test: "Blood Glucose", result: "95 mg/dL", date: "2024-12-01" },
    ],
    immunizations: [
      { vaccine: "Flu Shot", date: "2024-10-15" },
      { vaccine: "MMR", date: "2023-06-10" },
      { vaccine: "Flu Shot", date: "2024-10-15" },
      { vaccine: "MMR", date: "2023-06-10" },
      { vaccine: "Flu Shot", date: "2024-10-15" },
      { vaccine: "MMR", date: "2023-06-10" },
      { vaccine: "Flu Shot", date: "2024-10-15" },
      { vaccine: "MMR", date: "2023-06-10" },
      { vaccine: "Flu Shot", date: "2024-10-15" },
      { vaccine: "MMR", date: "2023-06-10" },
      { vaccine: "Flu Shot", date: "2024-10-15" },
      { vaccine: "MMR", date: "2023-06-10" },
      { vaccine: "Flu Shot", date: "2024-10-15" },
      { vaccine: "MMR", date: "2023-06-10" },
    ],
    familyHistory: [
      { relation: "Mother", condition: "Diabetes" },
      { relation: "Father", condition: "Heart Disease" },
      { relation: "Mother", condition: "Diabetes" },
      { relation: "Father", condition: "Heart Disease" },
      { relation: "Mother", condition: "Diabetes" },
      { relation: "Father", condition: "Heart Disease" },
      { relation: "Mother", condition: "Diabetes" },
      { relation: "Father", condition: "Heart Disease" },
      { relation: "Mother", condition: "Diabetes" },
      { relation: "Father", condition: "Heart Disease" },
      { relation: "Mother", condition: "Diabetes" },
      { relation: "Father", condition: "Heart Disease" },
    ],
    socialHistory: {
      smoking: "Non-smoker",
      alcohol: "Occasional",
      exercise: "Jogging 3x a week",
      occupation: "Software Developer",
    },
    emergencyContact: {
      name: "John Doe",
      relationship: "Husband",
      phone: "(555) 987-6543",
    },
    referralInfo: {
      referrer: "Dr. Alex Karev",
      referralDate: "2024-01-15",
      reason: "Referral for Chest X-Ray",
    },
    surgicalHistory: [
      { surgery: "Appendectomy", date: "2015-03-20", outcome: "Successful" },
      {
        surgery: "Gallbladder Removal",
        date: "2019-11-05",
        outcome: "Successful",
      },
      { surgery: "Appendectomy", date: "2015-03-20", outcome: "Successful" },
      {
        surgery: "Gallbladder Removal",
        date: "2019-11-05",
        outcome: "Successful",
      },
      { surgery: "Appendectomy", date: "2015-03-20", outcome: "Successful" },
      {
        surgery: "Gallbladder Removal",
        date: "2019-11-05",
        outcome: "Successful",
      },
      { surgery: "Appendectomy", date: "2015-03-20", outcome: "Successful" },
      {
        surgery: "Gallbladder Removal",
        date: "2019-11-05",
        outcome: "Successful",
      },
      { surgery: "Appendectomy", date: "2015-03-20", outcome: "Successful" },
      {
        surgery: "Gallbladder Removal",
        date: "2019-11-05",
        outcome: "Successful",
      },
      { surgery: "Appendectomy", date: "2015-03-20", outcome: "Successful" },
      {
        surgery: "Gallbladder Removal",
        date: "2019-11-05",
        outcome: "Successful",
      },
    ],
    hospitalAdmissions: [
      {
        hospital: "St. Health Hospital",
        date: "2023-06-25",
        reason: "Asthma Exacerbation",
      },
    ],
    currentDiagnosis: ["Asthma - Mild Persistent", "Hypertension - Controlled"],
    insuranceCoverage: {
      policyHolder: "Jane Doe",
      coverageType: "PPO",
      expirationDate: "2025-12-31",
    },
    medicationsHistory: [
      { name: "Amlodipine", duration: "2 years", reason: "Hypertension" },
      { name: "Simvastatin", duration: "1 year", reason: "Cholesterol" },
      { name: "Amlodipine", duration: "2 years", reason: "Hypertension" },
      { name: "Simvastatin", duration: "1 year", reason: "Cholesterol" },
      { name: "Amlodipine", duration: "2 years", reason: "Hypertension" },
      { name: "Simvastatin", duration: "1 year", reason: "Cholesterol" },
      { name: "Amlodipine", duration: "2 years", reason: "Hypertension" },
      { name: "Simvastatin", duration: "1 year", reason: "Cholesterol" },
      { name: "Amlodipine", duration: "2 years", reason: "Hypertension" },
      { name: "Simvastatin", duration: "1 year", reason: "Cholesterol" },
      { name: "Amlodipine", duration: "2 years", reason: "Hypertension" },
      { name: "Simvastatin", duration: "1 year", reason: "Cholesterol" },
    ],
    specialistReferrals: [
      {
        specialist: "Dr. Derek Shepherd",
        specialty: "Neurologist",
        date: "2024-01-10",
      },
    ],
    socialDeterminants: {
      incomeLevel: "Middle Class",
      housingStatus: "Stable",
      transportation: "Own car",
      accessToFood: "Yes",
    },
    psychiatricHistory: [
      {
        condition: "Anxiety Disorder",
        treatment: "Cognitive Behavioral Therapy",
        startDate: "2023-05-05",
      },
    ],
    nutritionAndDiet: {
      dietaryRestrictions: "Low-sodium",
      nutritionist: "Jane Doe, RD",
      mealPlan: "Low-sodium, High-Protein",
    },
    advancedDirectives: {
      organDonation: "Yes",
      livingWill: "Yes",
    },
    patientPreferences: {
      preferredLanguage: "English",
      communicationPreference: "Email",
      notificationPreference: "Text Message",
    },
    vitalSignsHistory: [
      {
        date: "2024-12-01",
        height: "5'6\"",
        weight: "132 lbs",
        bp: "120/80",
        pulse: "72 bpm",
      },
      {
        date: "2024-06-15",
        height: "5'6\"",
        weight: "130 lbs",
        bp: "118/76",
        pulse: "70 bpm",
      },
      {
        date: "2024-12-01",
        height: "5'6\"",
        weight: "132 lbs",
        bp: "120/80",
        pulse: "72 bpm",
      },
      {
        date: "2024-06-15",
        height: "5'6\"",
        weight: "130 lbs",
        bp: "118/76",
        pulse: "70 bpm",
      },
      {
        date: "2024-12-01",
        height: "5'6\"",
        weight: "132 lbs",
        bp: "120/80",
        pulse: "72 bpm",
      },
      {
        date: "2024-06-15",
        height: "5'6\"",
        weight: "130 lbs",
        bp: "118/76",
        pulse: "70 bpm",
      },
      {
        date: "2024-12-01",
        height: "5'6\"",
        weight: "132 lbs",
        bp: "120/80",
        pulse: "72 bpm",
      },
      {
        date: "2024-06-15",
        height: "5'6\"",
        weight: "130 lbs",
        bp: "118/76",
        pulse: "70 bpm",
      },
      {
        date: "2024-12-01",
        height: "5'6\"",
        weight: "132 lbs",
        bp: "120/80",
        pulse: "72 bpm",
      },
      {
        date: "2024-06-15",
        height: "5'6\"",
        weight: "130 lbs",
        bp: "118/76",
        pulse: "70 bpm",
      },
    ],
    lastEncounter: {
      date: "2024-12-10",
      reason: "Annual Physical",
      doctor: "Dr. Meredith Grey",
      notes: "Patient is in overall good health. No major changes.",
    },
  };

  return (
    <div className="ehr-container">
      <Card className="ehr-card w-100">
        <div className="ehr-header">
          <div className="ehr-header-info d-flex align-items-center">
            <Text weight="strong" size="large" className="mr-4">
              {patient.name}
            </Text>
            <Text appearance="subtle" size="small" className="mr-4">
              DOB: {patient.dob} | Gender: {patient.gender}
            </Text>
            <Badge appearance="primary" className="mr-4">
              Patient ID: {patient.id}
            </Badge>
            <Badge appearance="primary" className="mr-4">
              MRN: {encId}
            </Badge>
          </div>
        </div>

        <Divider />

        <div className="ehr-grid">
          {/* Demographics */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Contact Information
            </Text>
            <Text>{patient.phone}</Text>
            <Text>{patient.email}</Text>
            <Text>{patient.address}</Text>
          </div>

          {/* Allergies */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Allergies
            </Text>
            {patient.allergies.map((item, index) => (
              <Text key={index}>
                {item.substance} - {item.type} - Severity: {item.severity}
              </Text>
            ))}
          </div>

          {/* Medical History */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Medical History
            </Text>
            {patient.medicalHistory.map((condition, index) => (
              <Text key={index}>{condition}</Text>
            ))}
          </div>

          {/* Current Medications */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Current Medications
            </Text>
            {patient.currentMedications.map((med, index) => (
              <Text key={index}>
                {med.name} - {med.dosage} - {med.frequency}
              </Text>
            ))}
          </div>

          {/* Surgical History */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Surgical History
            </Text>
            {patient.surgicalHistory.map((surgery, index) => (
              <Text key={index}>
                {surgery.surgery} - {surgery.date} - Outcome: {surgery.outcome}
              </Text>
            ))}
          </div>

          {/* Hospital Admissions */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Hospital Admissions
            </Text>
            {patient.hospitalAdmissions.map((admission, index) => (
              <Text key={index}>
                {admission.hospital} - {admission.date} - Reason:{" "}
                {admission.reason}
              </Text>
            ))}
          </div>

          {/* Lab Results */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Lab Results
            </Text>
            {patient.labResults.map((result, index) => (
              <Text key={index}>
                {result.test}: {result.result} (Date: {result.date})
              </Text>
            ))}
          </div>

          {/* Referral Information */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Referral Information
            </Text>
            <Text>
              {patient.referralInfo.referrer} - {patient.referralInfo.reason}
            </Text>
          </div>

          {/* Social Determinants */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Social Determinants
            </Text>
            <Text>Income Level: {patient.socialDeterminants.incomeLevel}</Text>
            <Text>
              Housing Status: {patient.socialDeterminants.housingStatus}
            </Text>
            <Text>
              Transportation: {patient.socialDeterminants.transportation}
            </Text>
            <Text>
              Access to Food: {patient.socialDeterminants.accessToFood}
            </Text>
          </div>

          {/* Emergency Contact */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Emergency Contact
            </Text>
            <Text>Name: {patient.emergencyContact.name}</Text>
            <Text>Relationship: {patient.emergencyContact.relationship}</Text>
            <Text>Phone: {patient.emergencyContact.phone}</Text>
          </div>

          {/* Psychiatric History */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Psychiatric History
            </Text>
            {patient.psychiatricHistory.map((history, index) => (
              <Text key={index}>
                {history.condition} - Treatment: {history.treatment} (Start
                Date: {history.startDate})
              </Text>
            ))}
          </div>

          {/* Nutrition & Diet */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Nutrition & Diet Plan
            </Text>
            <Text>
              Dietary Restrictions:{" "}
              {patient.nutritionAndDiet.dietaryRestrictions}
            </Text>
            <Text>Nutritionist: {patient.nutritionAndDiet.nutritionist}</Text>
            <Text>Meal Plan: {patient.nutritionAndDiet.mealPlan}</Text>
          </div>

          {/* Advanced Directives */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Advanced Directives
            </Text>
            <Text>
              Organ Donation: {patient.advancedDirectives.organDonation}
            </Text>
            <Text>Living Will: {patient.advancedDirectives.livingWill}</Text>
          </div>

          {/* Last Encounter */}
          <div className="ehr-section">
            <Text weight="strong" size="regular">
              Last Encounter
            </Text>
            <Text>Date: {patient.lastEncounter.date}</Text>
            <Text>Reason: {patient.lastEncounter.reason}</Text>
            <Text>Doctor: {patient.lastEncounter.doctor}</Text>
            <Text>Notes: {patient.lastEncounter.notes}</Text>
          </div>
        </div>
      </Card>

      <Button
        icon="refresh"
        appearance="primary"
        className="generate-btn"
        onClick={() => setEncId(Math.floor(Math.random() * 1e10))}
      >
        Generate New Encounter ID
      </Button>
    </div>
  );
};

export default PatientProfile;
