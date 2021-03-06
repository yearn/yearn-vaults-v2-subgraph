// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class Vault extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Vault", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("Vault", [address.toHex()], context);
  }
}

export class Strategy extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Strategy", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "Strategy",
      [address.toHex()],
      context
    );
  }
}
