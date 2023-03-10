// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: resources/proto/coffeeguide.proto
/* eslint-disable */

import type { ByteSource } from "protoscript";
import { BinaryReader, BinaryWriter } from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

/**
 * Reply containing a list of the available coffees
 */
export interface CoffeeListReply {
  list: Coffee[];
}

/**
 * Message containing the name and information about a coffee
 */
export interface Coffee {
  name: string;
  preview: string;
  id: string;
}

export interface CoffeeReply {
  name: string;
  description: string;
  id: string;
}

/**
 * Request containing the name of the requested coffee
 */
export interface CoffeeRequest {
  id: string;
}

//========================================//
//      CoffeeGuide Protobuf Client       //
//========================================//

/**
 * Get the list of available coffee's
 */
export async function GetCoffeeList(
  empty: protoscript.Empty,
  config?: ClientConfiguration
): Promise<CoffeeListReply> {
  const response = await PBrequest(
    "/coffeeguide.CoffeeGuide/GetCoffeeList",
    protoscript.Empty.encode(empty),
    config
  );
  return CoffeeListReply.decode(response);
}

/**
 * Get info about a specific coffee
 */
export async function GetCoffee(
  coffeeRequest: CoffeeRequest,
  config?: ClientConfiguration
): Promise<CoffeeReply> {
  const response = await PBrequest(
    "/coffeeguide.CoffeeGuide/GetCoffee",
    CoffeeRequest.encode(coffeeRequest),
    config
  );
  return CoffeeReply.decode(response);
}

//========================================//
//        CoffeeGuide JSON Client         //
//========================================//

/**
 * Get the list of available coffee's
 */
export async function GetCoffeeListJSON(
  empty: protoscript.Empty,
  config?: ClientConfiguration
): Promise<CoffeeListReply> {
  const response = await JSONrequest(
    "/coffeeguide.CoffeeGuide/GetCoffeeList",
    protoscript.EmptyJSON.encode(empty),
    config
  );
  return CoffeeListReplyJSON.decode(response);
}

/**
 * Get info about a specific coffee
 */
export async function GetCoffeeJSON(
  coffeeRequest: CoffeeRequest,
  config?: ClientConfiguration
): Promise<CoffeeReply> {
  const response = await JSONrequest(
    "/coffeeguide.CoffeeGuide/GetCoffee",
    CoffeeRequestJSON.encode(coffeeRequest),
    config
  );
  return CoffeeReplyJSON.decode(response);
}

//========================================//
//              CoffeeGuide               //
//========================================//

export interface CoffeeGuide<Context = unknown> {
  /**
   * Get the list of available coffee's
   */
  GetCoffeeList: (
    empty: protoscript.Empty,
    context: Context
  ) => Promise<CoffeeListReply> | CoffeeListReply;
  /**
   * Get info about a specific coffee
   */
  GetCoffee: (
    coffeeRequest: CoffeeRequest,
    context: Context
  ) => Promise<CoffeeReply> | CoffeeReply;
}

export function createCoffeeGuide<Context>(service: CoffeeGuide<Context>) {
  return {
    name: "coffeeguide.CoffeeGuide",
    methods: {
      GetCoffeeList: {
        name: "GetCoffeeList",
        handler: service.GetCoffeeList,
        input: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
        output: { protobuf: CoffeeListReply, json: CoffeeListReplyJSON },
      },
      GetCoffee: {
        name: "GetCoffee",
        handler: service.GetCoffee,
        input: { protobuf: CoffeeRequest, json: CoffeeRequestJSON },
        output: { protobuf: CoffeeReply, json: CoffeeReplyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const CoffeeListReply = {
  /**
   * Serializes CoffeeListReply to protobuf.
   */
  encode: function (msg: Partial<CoffeeListReply>): Uint8Array {
    return CoffeeListReply._writeMessage(
      msg,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes CoffeeListReply from protobuf.
   */
  decode: function (bytes: ByteSource): CoffeeListReply {
    return CoffeeListReply._readMessage(
      CoffeeListReply.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Initializes CoffeeListReply with all fields set to their default value.
   */
  initialize: function (): CoffeeListReply {
    return {
      list: [],
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<CoffeeListReply>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.list?.length) {
      writer.writeRepeatedMessage(1, msg.list as any, Coffee._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CoffeeListReply,
    reader: BinaryReader
  ): CoffeeListReply {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = Coffee.initialize();
          reader.readMessage(m, Coffee._readMessage);
          msg.list.push(m);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const Coffee = {
  /**
   * Serializes Coffee to protobuf.
   */
  encode: function (msg: Partial<Coffee>): Uint8Array {
    return Coffee._writeMessage(msg, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes Coffee from protobuf.
   */
  decode: function (bytes: ByteSource): Coffee {
    return Coffee._readMessage(Coffee.initialize(), new BinaryReader(bytes));
  },

  /**
   * Initializes Coffee with all fields set to their default value.
   */
  initialize: function (): Coffee {
    return {
      name: "",
      preview: "",
      id: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<Coffee>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.preview) {
      writer.writeString(2, msg.preview);
    }
    if (msg.id) {
      writer.writeString(3, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Coffee, reader: BinaryReader): Coffee {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        case 2: {
          msg.preview = reader.readString();
          break;
        }
        case 3: {
          msg.id = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const CoffeeReply = {
  /**
   * Serializes CoffeeReply to protobuf.
   */
  encode: function (msg: Partial<CoffeeReply>): Uint8Array {
    return CoffeeReply._writeMessage(msg, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes CoffeeReply from protobuf.
   */
  decode: function (bytes: ByteSource): CoffeeReply {
    return CoffeeReply._readMessage(
      CoffeeReply.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Initializes CoffeeReply with all fields set to their default value.
   */
  initialize: function (): CoffeeReply {
    return {
      name: "",
      description: "",
      id: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<CoffeeReply>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.description) {
      writer.writeString(2, msg.description);
    }
    if (msg.id) {
      writer.writeString(3, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CoffeeReply, reader: BinaryReader): CoffeeReply {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        case 2: {
          msg.description = reader.readString();
          break;
        }
        case 3: {
          msg.id = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const CoffeeRequest = {
  /**
   * Serializes CoffeeRequest to protobuf.
   */
  encode: function (msg: Partial<CoffeeRequest>): Uint8Array {
    return CoffeeRequest._writeMessage(
      msg,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes CoffeeRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CoffeeRequest {
    return CoffeeRequest._readMessage(
      CoffeeRequest.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Initializes CoffeeRequest with all fields set to their default value.
   */
  initialize: function (): CoffeeRequest {
    return {
      id: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<CoffeeRequest>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CoffeeRequest,
    reader: BinaryReader
  ): CoffeeRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const CoffeeListReplyJSON = {
  /**
   * Serializes CoffeeListReply to JSON.
   */
  encode: function (msg: Partial<CoffeeListReply>): string {
    return JSON.stringify(CoffeeListReplyJSON._writeMessage(msg));
  },

  /**
   * Deserializes CoffeeListReply from JSON.
   */
  decode: function (json: string): CoffeeListReply {
    return CoffeeListReplyJSON._readMessage(
      CoffeeListReplyJSON.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes CoffeeListReply with all fields set to their default value.
   */
  initialize: function (): CoffeeListReply {
    return {
      list: [],
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<CoffeeListReply>
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.list?.length) {
      json["list"] = msg.list.map(CoffeeJSON._writeMessage);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CoffeeListReply, json: any): CoffeeListReply {
    const _list_ = json["list"];
    if (_list_) {
      for (const item of _list_) {
        const m = Coffee.initialize();
        CoffeeJSON._readMessage(m, item);
        msg.list.push(m);
      }
    }
    return msg;
  },
};

export const CoffeeJSON = {
  /**
   * Serializes Coffee to JSON.
   */
  encode: function (msg: Partial<Coffee>): string {
    return JSON.stringify(CoffeeJSON._writeMessage(msg));
  },

  /**
   * Deserializes Coffee from JSON.
   */
  decode: function (json: string): Coffee {
    return CoffeeJSON._readMessage(CoffeeJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Coffee with all fields set to their default value.
   */
  initialize: function (): Coffee {
    return {
      name: "",
      preview: "",
      id: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: Partial<Coffee>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.preview) {
      json["preview"] = msg.preview;
    }
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Coffee, json: any): Coffee {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _preview_ = json["preview"];
    if (_preview_) {
      msg.preview = _preview_;
    }
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const CoffeeReplyJSON = {
  /**
   * Serializes CoffeeReply to JSON.
   */
  encode: function (msg: Partial<CoffeeReply>): string {
    return JSON.stringify(CoffeeReplyJSON._writeMessage(msg));
  },

  /**
   * Deserializes CoffeeReply from JSON.
   */
  decode: function (json: string): CoffeeReply {
    return CoffeeReplyJSON._readMessage(
      CoffeeReplyJSON.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes CoffeeReply with all fields set to their default value.
   */
  initialize: function (): CoffeeReply {
    return {
      name: "",
      description: "",
      id: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: Partial<CoffeeReply>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.description) {
      json["description"] = msg.description;
    }
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CoffeeReply, json: any): CoffeeReply {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _description_ = json["description"];
    if (_description_) {
      msg.description = _description_;
    }
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const CoffeeRequestJSON = {
  /**
   * Serializes CoffeeRequest to JSON.
   */
  encode: function (msg: Partial<CoffeeRequest>): string {
    return JSON.stringify(CoffeeRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CoffeeRequest from JSON.
   */
  decode: function (json: string): CoffeeRequest {
    return CoffeeRequestJSON._readMessage(
      CoffeeRequestJSON.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes CoffeeRequest with all fields set to their default value.
   */
  initialize: function (): CoffeeRequest {
    return {
      id: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<CoffeeRequest>
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CoffeeRequest, json: any): CoffeeRequest {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};
