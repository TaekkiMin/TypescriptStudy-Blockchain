interface Config {
  urls: string;
}

declare module "myPackage" {
  function init(config: Config): boolean; // true로 리턴하기 때문
  function exit(code: number): number; // code + 1로 리턴하기 때문
}
