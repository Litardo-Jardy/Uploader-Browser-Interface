import { PhotoIcon, VideoIcon, DocumentIcon } from '../../icons'
import './FileItem.css';

type FileStatus = 'uploading' | 'done' | 'error'
type FileType = 'image' | 'video' | 'document'

interface FileItemProps {
  name: string
  size: string
  progress: number
  status: FileStatus
  type: FileType
}

const iconMap = {
  image:    <PhotoIcon size={18} />,
  video:    <VideoIcon size={18} />,
  document: <DocumentIcon size={18} />,
}

const statusLabel = {
  uploading: (p: number) => `Subiendo... ${p}%`,
  done:      () => 'Completado',
  error:     () => 'Error al subir',
}

const FileItem = ({ name, size, progress, status, type }: FileItemProps) => (
  <div className={`file-item ${status === 'error' ? 'file-item--error' : ''}`}>

    <div className={`file-icon file-icon--${type}`}>
      {iconMap[type]}
    </div>

    <div className="file-info">
     
      <span className="file-name">{name}</span>
     
      <div className="file-meta">
        <span>{size}</span>
        <span>·</span>

        <span className={`file-status--${status}`}>
          {statusLabel[status](progress)}
        </span>

      </div>

      <div className="file-progress">
        <div
          className={`file-progress-fill file-progress-fill--${status === 'uploading' ? '' : status}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

    <div className="file-actions">
      {status === 'done' && (
        <button className="file-action-btn">
          {/* EyeIcon */}
        </button>
      )}
      {status === 'error' && (
        <button className="file-action-btn file-action-btn--danger">
          {/* RetryIcon */}
        </button>
      )}
      <button className="file-action-btn">
        {/* CloseIcon */}
      </button>
    </div>
  </div>
)

export default FileItem
