import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Axios from "axios";
import Resizer from "react-image-file-resizer";

library.add(fas);

function ImageUpload(props) {
    const onDrop = (files) => {
        let file = files[0];
        Resizer.imageFileResizer(
            file,
            300, // maxWidth
            240, // maxHeight
            "JPEG", // output format
            50, // compression ratio
            0, // rotation
            (uri) => {
                props.setUploadImage(uri);
            },
            "base64"
        );
    };

    let placeHolder = props.image ? (
        /* Area for image display */
        <div
            style={{
                display: "flex",
                width: "350px",
                height: "240px",
                overflowX: "scroll",
            }}
        >
            <img src={props.image} />
        </div>
    ) : (
            <FontAwesomeIcon icon="plus" style={{ fontSize: "3rem" }} />
        );

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* box for file upload */}
            <Dropzone onDrop={onDrop} multiple={false}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        style={{
                            width: "300px",
                            height: "240px",
                            border: "1px solid lightgray",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        {placeHolder}
                    </div>
                )}
            </Dropzone>
        </div>
    );
}

export default ImageUpload;
