import React, {useEffect, useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './LoadFile.css'


const LoadFile = () => {
    const {addFileAction, clearFiles, fetchURL} = useActions()
    const {data} = useTypedSelector(state => state.data)

    console.log(data)
    const loadData = (e: any) => {
        data.length + e.target.files.length > 100 ? alert("Максимальное количество файлов") : addFileAction(e.target.files)
    }

    return (
        <div>
            <h3> Выберите файлы для загрузки </h3>
            <div className="LoadContainer">
                <input
                    onChange={ (e: any) => loadData(e)}
                    multiple
                    type="file"
                    className="input"
                    id="fileInput"
                />

                {/* Стилизованная кнопка */}
                <label htmlFor="fileInput" className="custom-file-input">
                    Выбрать файлы
                </label>
                <span className="ValueFiles"> Файлов: {data && data.length } </span>
                <span
                    onClick={clearFiles}
                    className="ClearFiles"
                > &times;
                </span>
                <button onClick={fetchURL}> Отправить </button>
            </div>

        </div>
    );
};

export default LoadFile;