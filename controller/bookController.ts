import { Request, Response } from "express";
import crypto from "crypto";
import { iBooks } from "../utils/interface";

const bookShelf: iBooks[] = [];

export const getBooks = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Book shelf opened successfully",
      data: bookShelf,
    });
  } catch (error) {
    return res.status(404).json({
      message: "books not found",
    });
  }
};

export const createBooks = (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;
    const ID: string = crypto.randomUUID();

    const newBooks = {
      id: ID,
      title,
      author,
    };

    bookShelf.push(newBooks);
    return res.status(201).json({
      message: "Books created successfully",
      data: newBooks,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to create successfully",
    });
  }
};

export const singleBook = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleBook = bookShelf.filter((el: iBooks) => {
      return el?.id === id;
    });

    res.status(200).json({
      message: "Viewing a Single Book",
      data: singleBook,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to view single book",
    });
  }
};

export const updateBook = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { title, author } = req.body;

    const realBooks = parseInt(id) - 1;

    bookShelf[realBooks].title = title;
    bookShelf[realBooks].author = author;

    return res.status(201).json({
      message: "Book updates successfully",
      data: bookShelf,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to update book",
    });
  }
};

export const deleteBook = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteBooks = bookShelf.filter((el: any) => {
      return el?.id !== id;
    });

    res.status(201).json({
      message: "Books deleted successfully",
      data: deleteBooks,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to delete books",
    });
  }
};
