import React from 'react';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas);


function imageUpload() {
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Dropzone 
            onDrop
            multiple
            maxSize
            >
                {({getRootProps, getInputProps}) => (
                    <div style={{width:'300px', height:'240px', border: '1px solid lightgray', display:'flex', alignItems:'center'}}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <FontAwesomeIcon icon="plus" style={{ fontSize:'3rem'}} />

                    </div>
                )}
            </Dropzone>
        </div>
    )
}

export default imageUpload;

