import { useState } from "react";
import { uploadCSVApi } from "../services/AgentApi";

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage(""); // previous message clear
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a CSV file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await uploadCSVApi(formData);
      setMessage(res.data.message);
      setFile(null); // reset file input
    } catch (err) {
      setMessage(err.response?.data?.message || "Error uploading CSV");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload CSV</h2>

        {message && (
          <div className="mb-4 p-2 rounded text-white bg-blue-500">{message}</div>
        )}

        <form onSubmit={handleUpload} className="flex flex-col space-y-4">
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            className="border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-semibold transition-colors"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload CSV"}
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          Only CSV, XLSX, XLS files are allowed.
        </p>
      </div>
    </div>
  );
};

export default UploadCSV;
