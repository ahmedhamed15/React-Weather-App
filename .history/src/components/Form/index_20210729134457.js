const index = () => {
    return (
        <div className="form-popup">
            <span> &times; </span>
            <form>
                <div className="form-group">
                    <select name="city">
                        <option value="cairo"> Cairo </option>
                        <option value="mansoura"> Mansoura </option>
                        <option value="minia"> Minia </option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default index
