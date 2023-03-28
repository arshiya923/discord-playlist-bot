import React from 'react'

import './MainContent.css'

const MainContent = () => {
	return(
		<div id='main-content'>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>This Is My Test Playlist</td>
						<td>EBTN</td>
						<td>DBTN</td>
					</tr>
					<tr>
						<td>1</td>
						<td>This Is My Test Playlist</td>
						<td>EBTN</td>
						<td>DBTN</td>
					</tr>
					<tr>
						<td>1</td>
						<td>This Is My Test Playlist</td>
						<td>EBTN</td>
						<td>DBTN</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default MainContent