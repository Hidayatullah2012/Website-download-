function addFile() {
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    if (fileInput.files.length === 0) {
        alert("Pilih file terlebih dahulu!");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const fileData = event.target.result;

        const listItem = document.createElement("li");
        listItem.textContent = file.name;

        const downloadLink = document.createElement("a");
        downloadLink.href = fileData;
        downloadLink.download = file.name;
        downloadLink.textContent = " Download";

        listItem.appendChild(downloadLink);
        fileList.appendChild(listItem);
    };

    reader.readAsDataURL(file);
}