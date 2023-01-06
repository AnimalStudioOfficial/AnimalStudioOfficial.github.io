import React, { useEffect, useState, Component } from "react";

import List2 from "./List2";
import styled from "styled-components";
import Link from "./Link";

import List from './List';
import withListLoading from './withListLoading';

const ProfileWrapper = styled.div `
width: 50%;
margin: 10px auto;
`  ;

const Avatar = styled.img `
width: 150px;
`

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      repositories: [],
      loading: true,
    };
  }
  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/AnimalStudioOfficial");
    const profileJSON = await profile.json();
    if (profileJSON) {
      const repositories = await fetch(profileJSON.repos_url);
      const repositoriesJSON = await repositories.json();
      this.setState({
        data: profileJSON,
        repositories: repositoriesJSON,
        loading: false,
      });
    }
  }
  render() {
    const { data, loading, repositories } = this.state;
    const items = [
        { label: 'html_url', value :  <Link url={data.html_url} title='Github URL' /> },
         { label: 'name', value: data.name},
         { label: 'company', value: data.company },
         { label: 'location', value: data.location },
         { label: 'email', value: data.email },
        { label: 'bio', value: data.bio } ];

        const repos = repositories.map(repo => ({
          label : repo.name,
          value : <Link url={repo.html_url} title='Github URL' />
        }))

    if (loading) {
      return <div>Loading data</div>;
    }
    return (
      <section>
        
      <div>
        <ProfileWrapper className="Profile-container">
          <Avatar className="Profile-avatar" src={data.avatar_url} alt="avatar" />
              <List2 items = {items} title = 'Public Profile'></List2>
              <List2 items = {repos} title = 'Public Repositories' ></List2>
        </ProfileWrapper>
      </div>
      </section>
    );
  }
}

// function Profile() {
//     const ListLoading = withListLoading(List);
//     const [appState, setAppState] = useState({
//       loading: false,
//       repos: null,
//     });
  
//     useEffect(() => {
//       setAppState({ loading: true });
//       const apiUrl = `https://api.github.com/users/david405/repos`;
//       fetch(apiUrl)
//         .then((res) => res.json())
//         .then((repos) => {
//           setAppState({ loading: false, repos: repos });
//         });
//     }, [setAppState]);
//     return (
//       <div className='App'>
//         <div className='container'>
//           <h1>My Repositories</h1>
//         </div>
//         <div className='repo-container'>
//           <ListLoading isLoading={appState.loading} repos={appState.repos} />
//         </div>
//         <footer>
//           <div className='footer'>
//             Built with{' '}
//             <span role='img' aria-label='love'>
//               💚
//             </span>{' '}
//              by David Asamonye
//           </div>
//         </footer>
//       </div>
//     );
// }

export default Profile