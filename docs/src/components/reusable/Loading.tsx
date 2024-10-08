import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-[2rem] w-[2rem] border-r-2 border-primary border-solid"></div>
        </div>
    );
};

export default Loading;