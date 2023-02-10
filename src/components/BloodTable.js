import '../App.css';
import donationFact from "../images/donationFact.webp";
// Example of a data array that
// you might receive from an API
const data = [
{ name: "Anom", age: 19, gender: "Male" },
{ name: "Megha", age: 19, gender: "Female" },
{ name: "Subham", age: 25, gender: "Male"},
]

export const BloodTable = () =>{
return (
	<>
  <div className='row'>
   <img className="col-6" src={donationFact} alt="React Image" />
	<table className="col-6">
		{/* <tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
			</tr>
		)
		})} */}
		<tbody>
              <tr>
                <th colspan="3">Compatible Blood Type Donors</th>
              </tr>
              <tr>
                <td><b>Blood Type</b></td>
                <td><b>Donate Blood To</b></td>
                <td><b>Receive Blood From</b></td>
              </tr>
              <tr>
                <td><span><b>A+</b></span></td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td><span ><b>O+</b></span></td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td><span ><b>B+</b></span></td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td><span ><b>AB+</b></span></td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td><span ><b>A-</b></span></td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td><span ><b>O-</b></span></td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td><span ><b>B-</b></span></td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td><span ><b>AB-</b></span></td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
	</table>
  </div>
	</>
);
}

