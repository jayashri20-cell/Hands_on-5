import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import jobs from "../data/jobs";
import useAuth from "../hooks/useAuth";

function ApplicationForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const job = jobs.find((item) => item.id === Number(id));

  const [name, setName] = useState(user?.name || "");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(user?.course || "");
  const [experience, setExperience] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    const application = {
      id: Date.now(),
      jobId: job.id,
      company: job.company,
      role: job.role,
      name: name,
      age: age,
      email: email,
      phone: phone,
      course: course,
      experience: experience,
      expectedSalary: expectedSalary,
      skills: skills,
      resumeName: resume.name,
      additionalInfo: additionalInfo,
      appliedDate: new Date().toLocaleDateString("en-GB"),
      status: "Under Review",
    };

    const existingApplications =
      JSON.parse(localStorage.getItem("placementApplications")) || [];

    existingApplications.push(application);

    localStorage.setItem(
      "placementApplications",
      JSON.stringify(existingApplications)
    );

    alert(
      `Application submitted successfully!\n\n${job.company} - ${job.role}`
    );

    navigate("/applications");
  }

  if (!job) {
    return (
      <div className="no-results">
        <h2>Job Not Found</h2>

        <p>The selected job does not exist.</p>

        <Link to="/jobs" className="primary-btn">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="application-form-page">
      <div className="page-header">
        <div>
          <h1>Job Application</h1>

          <p>
            Applying for <strong>{job.role}</strong> at{" "}
            <strong>{job.company}</strong>
          </p>
        </div>

        <Link to={`/jobs/${job.id}`} className="primary-btn">
          Back to Job
        </Link>
      </div>

      <div className="application-form-card">
        <h2>Personal Information</h2>

        <form onSubmit={handleSubmit}>
          <div className="application-form-grid">
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                pattern="[A-Za-z ]+"
                title="Name should contain letters and spaces only"
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>

              <input
                type="number"
                min="18"
                max="35"
                placeholder="Enter your age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Course</label>

              <input
                type="text"
                placeholder="Example: B.Tech Information Technology"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Experience</label>

              <select
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
                required
              >
                <option value="">Select experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Less than 1 year">
                  Less than 1 year
                </option>
                <option value="1 - 2 years">1 - 2 years</option>
                <option value="2+ years">2+ years</option>
              </select>
            </div>

            <div className="form-group">
              <label>Expected Salary</label>

              <input
                type="text"
                placeholder="Example: ₹5 LPA"
                value={expectedSalary}
                onChange={(event) =>
                  setExpectedSalary(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Skills</label>

              <input
                type="text"
                placeholder="Example: HTML, CSS, React"
                value={skills}
                onChange={(event) => setSkills(event.target.value)}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Resume</label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(event) =>
                  setResume(event.target.files[0])
                }
                required
              />

              <small>
                Accepted formats: PDF, DOC, DOCX
              </small>
            </div>

            <div className="form-group full-width">
              <label>Additional Information</label>

              <textarea
                placeholder="Add any additional information..."
                value={additionalInfo}
                onChange={(event) =>
                  setAdditionalInfo(event.target.value)
                }
                rows="5"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;