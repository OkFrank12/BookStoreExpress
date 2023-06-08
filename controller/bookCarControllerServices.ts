import { Request, Response } from "express";
import axios from "axios";

const url: string = `http://localhost:6000`;

export const getSales = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const manager = await axios.get(`${url}/api/data`).then((res) => {
      return res.data.data;
    });
    console.log(manager);

    return res.status(200).json({
      message: "Sales Data successfully retrieved",
      data: manager,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get sales data",
    });
  }
};
