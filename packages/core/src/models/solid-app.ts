import { createUrl } from "../utils/url-helper";

export interface SolidAppOptions {
  baseUrl: string;
}

export class SolidApp {
  public readonly baseUrl: URL;

  constructor(options: SolidAppOptions) {
    this.baseUrl = createUrl(options.baseUrl);
  }
}

export interface SolidAppProxyOptions extends SolidAppOptions {
  forwardingUrl: string;
  tokenUrl: string;
  featureLogging: boolean;
}

export class SolidAppProxy extends SolidApp {
  public readonly forwardingUrl: URL;
  public readonly tokenUrl: URL;
  public readonly featureLogging: boolean;

  constructor(options: SolidAppProxyOptions) {
    super(options);
    this.forwardingUrl = createUrl(options.forwardingUrl);
    this.tokenUrl = createUrl(options.tokenUrl);
    this.featureLogging = options.featureLogging;
  }
}
