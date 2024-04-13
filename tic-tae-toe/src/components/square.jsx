

// eslint-disable-next-line react/prop-types
const Square = ({val,onclick}) => {
    
    return( 
    <button type="button" className="square" onClick={onclick}>
        {val}
    </button >)
};

export default Square;