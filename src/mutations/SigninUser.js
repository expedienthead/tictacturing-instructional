import Relay from 'react-relay';

export default class SigninUser extends Relay.Mutation {

  getVariables() {
    return {
      auth0: {
        idToken: this.props.idToken
      }
    };
  }

  getMutation() {
    return Relay.QL`mutation{signinUser}`;
  }

  getFatQuery() {
    return Relay.QL`
      fragment on SigninPayload {
        viewer
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'REQUIRE_CHILDREN',
        children: [
          Relay.QL`
            fragment on SigninPayload {
              viewer {
                user {
                  id
                }
              }
            }
          `
        ]
      }
    ];
  }
}
