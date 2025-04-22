const downloadJSON = (data) => {
  const dataToDownload = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(data)
  )}`;
  const anchor = document.createElement("a");
  anchor.href = dataToDownload;
  anchor.download = "patientList.json";
  document.body.appendChild(anchor);
  anchor.click();
};

const readJSONFile = (onRead) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/JSON";
  input.onchange = ({ target: { files } }) => {
    const reader = new FileReader();

    reader.onload = ({ target: { result } }) => {
      onRead(JSON.parse(result));
    };

    reader.readAsText(files[0]);
  };
  input.click();
};

export default {
  downloadJSON,
  readJSONFile,
};
