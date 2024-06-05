import React, { useState } from 'react';
import Backendless from 'backendless';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const uploadFile = () => {
        if (file) {
            const userId = Backendless.UserService.getCurrentUser().objectId;
            const filePath = `${userId}/${file.name}`;
            Backendless.Files.upload(file, userId)
                .then(uploadedFile => console.log('File uploaded: ', uploadedFile))
                .catch(error => console.error('Error uploading file: ', error));
        }
    };

    return (
        <div>
            <h2>Upload File</h2>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    );
};

export default FileUpload;
