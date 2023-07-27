import React from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './LoadFile.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const LoadFile = () => {
    const {addFileAction, clearFiles, uploadFiles} = useActions()
    const {data, uploadingData} = useTypedSelector(state => state.data)
    const {access_token} = useTypedSelector(state => state.auth)
    const loadData = (e: any) => {
        data.length + e.target.files.length > 100 ? alert("Максимальное количество файлов = 100") : addFileAction(e.target.files)
    }

    const upload = () => {
        uploadFiles(access_token, data)
        clearFiles()
    }

    if (uploadingData) return <FontAwesomeIcon icon={faSpinner} spin size={"2xl"}/>

    return (
        <div className="container">
            <h3 className="title"> Выберите файлы для загрузки </h3>
            <div className="LoadContainer">
                <input
                    onChange={ (e: any) => loadData(e)}
                    multiple
                    type="file"
                    className="input"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="custom-file-input">
                    Выбрать файлы
                </label>
                <span className="ValueFiles"> Файлов: {data && data.length } </span>
                <span
                    onClick={clearFiles}
                    className="ClearFiles"
                > &times;
                </span>
                <button
                    className="uploadBtn"
                    onClick={upload}> Отправить </button>
            </div>

        </div>
    );
};

export default LoadFile;