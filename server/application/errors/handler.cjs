// server\application\errors\handler.cjs

// eslint-disable-next-line no-unused-vars
const handleErrors = (error, request, response, next) => {
  const statusCode = error.statusCode || 500;

  // eslint-disable-next-line no-undef
  const isInProduction = process.env.NODE_ENVIRONMENT === "production";

  const errorMessage = isInProduction
    ? 500 <= statusCode && statusCode < 600
      ? "Internal Server Error"
      : "Failed to process the request"
    : error.message;

  let errorDetailedMessage = errorMessage;

  if (!isInProduction && error.type) {
    errorDetailedMessage = `${error.type} - ${errorMessage}`;
  }

  const errorResponse = {
    hasIssueOccurred: true,
    message: errorDetailedMessage,
    status: error.kind || "error",
    ...(isInProduction ? {} : { stack: error.stack }),
  };

  response.status(statusCode).json(errorResponse);

  if (!isInProduction && statusCode === 500) {
    console.error(error);
  }

  console.error(
    `${new Date().toISOString()} - ${error.kind || "error"} - ${error.message} - ${request.method} - ${request.path}`,
  );
};

module.exports = handleErrors;
