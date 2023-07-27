import React from 'react';

const LoadFile = () => {
    const loadData = (e: any) => {
        console.log(e.target)
    }

    return (
        <div>
            <h3> Выберите файлы для загрузки </h3>
            <input onChange={ (e) => loadData(e)} type="file"/>
        </div>
    );
};

export default LoadFile;