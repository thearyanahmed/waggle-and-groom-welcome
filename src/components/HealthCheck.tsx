// Health check endpoint component for App Platform monitoring
export const HealthCheck = () => {
  return {
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "pet-grooming-landing",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "production"
  };
};