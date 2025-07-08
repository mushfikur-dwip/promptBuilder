import React, { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { brevoClient } from "../services/smtp";

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

      try {
        await brevoClient.sendMail({
          subject: "New Feedback from Scene Maker",
          message: `Feedback: ${feedback}\nRating: ${rating}/5 stars\nUser Email: ${email || 'Not provided'}`,
          sender: {
            name: "Scene Maker Feedback",
            email: "noreply@scenemaker.app" // You can use your own domain email
          },
          recipients: "musfikurrahmandip@gmail.com",
        });
        
        setStatus("success");
        setFeedback("");
        setEmail("");
        setRating(5);
        setTimeout(() => setStatus("idle"), 3000);
    
    
      } catch (error) {
      console.error("Error submitting feedback:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2" />
        Share Your Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Your Feedback
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us about your experience with the AI Video Scene Generator..."
            required
            rows={4}
            className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Rating
            </label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
              <option value={4}>⭐⭐⭐⭐ Good</option>
              <option value={3}>⭐⭐⭐ Average</option>
              <option value={2}>⭐⭐ Poor</option>
              <option value={1}>⭐ Very Poor</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "submitting" || !feedback.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
        >
          <Send className="w-4 h-4 mr-2" />
          {status === "submitting" ? "Submitting..." : "Submit Feedback"}
        </button>

        {status === "success" && (
          <div className="bg-green-900 border border-green-700 rounded-lg p-4">
            <p className="text-green-200">
              ✅ Thank you for your feedback! We appreciate your input and will
              use it to improve our service.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-900 border border-red-700 rounded-lg p-4">
            <p className="text-red-200">
              ❌ Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
