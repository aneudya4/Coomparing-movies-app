import React from "react";

class ComparingTable extends React.Component {
  render() {
    if (this.props.movies.length <= 1) {
      return null;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Release Date</th>
            <th>Vote Count</th>
            <th>Vote Average</th>
          </tr>
        </thead>
        <tbody>
          {this.props.movies.map(t => (
            <tr key={t.id}>
              <td
                style={{
                  background: "#f9f9f9",
                  padding: 25,
                  borderRight: "2px solid #f9f9f9",
                  borderBottom: "2px solid #f9f9f9"
                }}
              >
                {t.title}
              </td>
              <td>{t.release_date}</td>
              <td>{t.vote_count}</td>
              <td>{t.vote_average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ComparingTable;