import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError, ZodIssue } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContactSubmission(contactData);
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          service: contact.service,
          createdAt: contact.createdAt
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const formattedErrors = error.issues.reduce((acc: Record<string, string>, issue: ZodIssue) => {
          const path = issue.path.join(".");
          acc[path] = issue.message;
          return acc;
        }, {});
        
        return res.status(400).json({
          message: "Validation error",
          errors: formattedErrors
        });
      }
      
      // Handle other errors
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get all contact submissions (would be protected in a real app)
  app.get("/api/admin/contacts", async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getContactSubmissions();
      return res.status(200).json({ contacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({
        message: "An error occurred while fetching contacts"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
