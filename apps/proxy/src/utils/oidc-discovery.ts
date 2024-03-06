import { APPS } from "@seact/core";

export interface OpenIDConfiguration {
  authorization_endpoint: string;
  claims_parameter_supported: boolean;
  claims_supported: string[];
  code_challenge_methods_supported: string[];
  end_session_endpoint: string;
  grant_types_supported: string[];
  issuer: string;
  jwks_uri: string;
  registration_endpoint: string;
  authorization_response_iss_parameter_supported: boolean;
  response_modes_supported: string[];
  response_types_supported: string[];
  scopes_supported: string[];
  subject_types_supported: string[];
  token_endpoint_auth_methods_supported: string[];
  token_endpoint_auth_signing_alg_values_supported: string[];
  token_endpoint: string;
  id_token_signing_alg_values_supported: string[];
  pushed_authorization_request_endpoint: string;
  request_parameter_supported: boolean;
  request_uri_parameter_supported: boolean;
  introspection_endpoint: string;
  dpop_signing_alg_values_supported: string[];
  revocation_endpoint: string;
  claim_types_supported: string[];
}

export const oidcDiscovery = async (): Promise<OpenIDConfiguration | null> => {
  try {
    const response = await fetch(APPS.PROXY.openidConfigurationUrl);
    return (await response.json()) as OpenIDConfiguration;
  } catch (e) {
    return null;
  }
};
