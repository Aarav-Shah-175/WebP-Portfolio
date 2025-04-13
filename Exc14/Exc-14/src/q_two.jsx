import "./App.css";

function Q2() {
	return (
		<>
			<h3>Novell Services Login- 23BCE1166</h3>
			<br />

			<table>
				<tr>
					<td>Username: </td>
					<td>
						<input type="text" />
					</td>
				</tr>
				<tr>
					<td>Password: </td>
					<td>
						<input type="password" />
					</td>
				</tr>
				<tr>
					<td>City of Employment: </td>
					<td>
						<input type="text" />
					</td>
				</tr>
				<tr>
					<td>Web server: </td>
					<td>
						<select name="" id="">
							<option hidden selected>
								--Choose a server--
							</option>
							<option value="">Server 1</option>
							<option value="">Server 2</option>
							<option value="">Server 3</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>
						Please specify <br /> your role
					</td>
					<td>
						<input type="radio" name="role" />
						<label htmlFor="">Admin</label>
						<br />
						<input type="radio" name="role" />
						<label htmlFor="">Engineer</label> <br />
						<input type="radio" name="role" />
						<label htmlFor="">Manager</label> <br />
						<input type="radio" name="role" />
						<label htmlFor="">Guest</label>
					</td>
				</tr>
				<tr>
					<td>
						Single Sign-up <br />
						to the following:{" "}
					</td>
					<td>
						<input type="checkbox" />
						<label htmlFor="">Mail</label> <br />
						<input type="checkbox" />
						<label htmlFor="">Payroll</label> <br />
						<input type="checkbox" />
						<label htmlFor="">Self-service</label>
					</td>
				</tr>
				<tr>
					<td> </td>
					<td>
						<button>Login</button>
						<button>Reset</button>
					</td>
				</tr>
			</table>
		</>
	);
}

export default Q2;
