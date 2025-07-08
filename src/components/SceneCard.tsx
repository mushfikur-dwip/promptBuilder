import React from "react";
import { Loader2, Edit3, Trash2 } from "lucide-react";
import { Scene } from "../types";
import CopyButton from "../components/CopyButton";

interface SceneCardProps {
  scene: Scene;
  onEdit: (scene: Scene) => void;
  onDelete: (sceneId: string) => void;
}

const SceneCard: React.FC<SceneCardProps> = ({ scene, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition-colors duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">
          Scene {scene.sceneNumber}
        </h3>
        <div className="flex gap-2">
          <CopyButton
            textToCopy={`Scene ${scene.sceneNumber}: ${scene.description}
            Dialogue: ${scene.dialogue}
            Sound Direction: ${scene.soundDirection}`}
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            title="Copy scene details"
          />

          <button
            onClick={() => onEdit(scene)}
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            title="Edit scene"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(scene.id)}
            className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            title="Delete scene"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {scene.isGenerating ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
          <span className="ml-3 text-gray-300">Generating scene...</span>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">
              Scene Description
            </h4>
            <p className="text-gray-100 bg-gray-900 rounded-lg p-3 leading-relaxed">
              {scene.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Dialogue</h4>
            <p className="text-gray-100 bg-gray-900 rounded-lg p-3 leading-relaxed">
              {scene.dialogue}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">
              Sound Direction
            </h4>
            <p className="text-gray-100 bg-gray-900 rounded-lg p-3 leading-relaxed">
              {scene.soundDirection}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SceneCard;
