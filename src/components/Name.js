import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      console.log(response);
      this.setState({ posts: response.data });
    });
  }

  render() {
    return (
      <table>
        <thead className="_head">
          <tr>
            <td>SHOW </td>
            <td>LANGUAGE</td>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((itm, k) => {
            // console.log(itm.show.id);
            return (
              <tr>
                <td>{itm.show.name}</td>
                <td>{itm.show.language}</td>
                <Button className="m-2" color="primary" 
                onClick={event =>  window.location.href='/book'}
                >
                  View
                </Button>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Name;
