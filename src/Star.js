import utils from "./utiles";

const Star = (props) => {
    return ( 
        <>
            {utils.range(1, props.count).map(starId => 
                <div className="star" key={starId} />
            )}
        </>
     );
}
 
export default Star;