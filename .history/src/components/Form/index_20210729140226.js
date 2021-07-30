import './style.scss';
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
                <div className="form-group">
                    <select name="country">
                        <option value="eg"> Egypt </option>
                        <option value="jor"> Jordan </option>
                        <option value="usa"> America </option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default index
