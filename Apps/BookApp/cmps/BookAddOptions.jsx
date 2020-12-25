
export function BookAddOption({ options, callBack }) {


    function getOptForDisplay() {
        console.log(options);
        return options.map(option => {
            return <li key={option.volumeInfo.id} >{option.volumeInfo.title} {<button onClick={() => callBack(option)}>add</button>}</li>
        })
    }


    return (
        <ul>
            {getOptForDisplay()}
        </ul>
    );
}