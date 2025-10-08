import React, { useState } from 'react';
import { UploadCloud, X, ArrowLeft } from 'lucide-react';

// Custom component to display a status message (replaces alert())
const StatusModal = ({ status, onClose }) => {
    if (!status) return null;

    const baseStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(17, 24, 39, 0.7)', // bg-gray-900 bg-opacity-70
        zIndex: 50,
    };

    const cardBaseStyle = {
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.75rem', // rounded-xl
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
        maxWidth: '24rem', // max-w-sm
        width: '100%',
        transition: 'all 300ms',
        transform: 'scale(1)',
    };
    
    let colorStyle, title;

    if (status.type === 'success') {
        colorStyle = { 
            color: '#16a34a', // text-green-600
            borderColor: '#dcfce7', // border-green-200
            backgroundColor: '#f0fdf4' // bg-green-50
        };
        title = 'Success!';
    } else {
        colorStyle = { 
            color: '#dc2626', // text-red-600
            borderColor: '#fee2e2', // border-red-200
            backgroundColor: '#fef2f2' // bg-red-50
        };
        title = 'Error!';
    }

    const cardStyle = {
        ...cardBaseStyle,
        border: '1px solid',
        ...colorStyle
    };

    return (
        <div style={baseStyle} onClick={onClose}>
            <div style={cardStyle} onClick={e => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h3>
                    <button 
                        onClick={onClose} 
                        style={{ color: '#9ca3af', transition: 'color 300ms', cursor: 'pointer', border: 'none', background: 'none' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#4b5563'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                        aria-label="Close message"
                    >
                        <X size={20} />
                    </button>
                </div>
                <p style={{ marginTop: '1rem', color: '#374151' }}>{status.message}</p>
                <button
                    onClick={onClose}
                    style={{
                        marginTop: '1.5rem',
                        width: '100%',
                        padding: '0.5rem 0',
                        backgroundColor: '#2563eb', // bg-blue-600
                        color: 'white',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 300ms',
                        fontWeight: 600
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                >
                    Got It
                </button>
            </div>
        </div>
    );
};


/**
 * Component for faculty to upload marks data.
 * @param {object} props
 * @param {function} props.onBack - Function to navigate back to the dashboard.
 */
const UploadMarks = ({ onBack }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        setUploadStatus(null);
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log('Selected file for marks:', file.name);
        } else {
            setSelectedFile(null);
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            setUploadStatus({ type: 'error', message: 'Please select a marks file (CSV/Excel) first.' });
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            
            const MAX_SIZE = 5 * 1024 * 1024; // Smaller limit for data files
            if (selectedFile.size > MAX_SIZE) { 
                setUploadStatus({ type: 'error', message: `File too large: ${selectedFile.name}. Max size is 5MB.` });
            } else {
                setUploadStatus({
                    type: 'success',
                    message: `Successfully uploaded marks file: ${selectedFile.name}!`
                });
                setSelectedFile(null);
            }
        }, 1500);
    };

    const componentStyle = {
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        fontFamily: 'Inter, sans-serif'
    };

    const cardStyle = {
        width: '100%',
        maxWidth: '32rem',
        backgroundColor: 'white',
        padding: '2rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderRadius: '0.75rem',
        border: '1px solid #f3f4f6',
        position: 'relative'
    };

    const buttonBaseStyle = {
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        transition: 'color 300ms',
    };

    const buttonHoverStyle = {
        color: '#4f46e5',
    };

    const fileInputContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '12rem',
        padding: '1rem',
        transition: 'all 300ms ease-in-out',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        textAlign: 'center',
        borderStyle: selectedFile ? 'solid' : 'dashed',
        borderWidth: '2px',
        borderColor: selectedFile ? '#f59e0b' : '#d1d5db', // Amber for marks
        backgroundColor: selectedFile ? '#fffbeb' : 'transparent', // Amber light background
    };

    const uploadButtonStyle = {
        marginTop: '1.5rem',
        width: '100%',
        padding: '0.75rem 0',
        fontSize: '1.125rem',
        fontWeight: '600',
        borderRadius: '0.5rem',
        transition: 'all 200ms',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    // Style for the Upload Button when enabled (Blue/Indigo for action)
    const enabledUploadButtonStyle = {
        backgroundColor: '#4f46e5', // Indigo-600
        color: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    };

    // Style for the Upload Button when disabled/loading
    const disabledUploadButtonStyle = {
        backgroundColor: '#d1d5db',
        color: '#4b5563',
        cursor: 'not-allowed',
    };

    return (
        <div style={componentStyle}>
            <div style={cardStyle}>
                
                {/* Back Button */}
                <button 
                    onClick={onBack} 
                    style={{ 
                        ...buttonBaseStyle,
                        position: 'absolute', 
                        top: '1rem', 
                        left: '1rem',
                        color: '#6b7280',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = buttonHoverStyle.color}
                    onMouseOut={(e) => e.currentTarget.style.color = '#6b7280'}
                >
                    <ArrowLeft size={24} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <UploadCloud size={48} style={{ color: '#f59e0b', margin: '0 auto', marginBottom: '0.75rem' }} /> {/* Amber for marks */}
                    <h2 style={{ fontSize: '1.875rem', fontWeight: '800', color: '#1f2937' }}>Upload Student Marks</h2>
                    <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
                        Please upload your spreadsheet containing student marks.
                    </p>
                </div>

                {/* File Dropzone / Input Area */}
                <label
                    htmlFor="marks-file-upload"
                    style={{
                        ...fileInputContainerStyle,
                        ...(selectedFile ? { 
                            borderColor: '#f59e0b', 
                            backgroundColor: '#fffbeb' 
                        } : {
                            borderColor: '#d1d5db',
                            backgroundColor: 'transparent'
                        }),
                    }}
                    onMouseOver={e => !selectedFile && (e.currentTarget.style.borderColor = '#fbbf24', e.currentTarget.style.backgroundColor = '#fef3c7')}
                    onMouseOut={e => !selectedFile && (e.currentTarget.style.borderColor = '#d1d5db', e.currentTarget.style.backgroundColor = 'transparent')}
                >
                    {/* The hidden file input element */}
                    <input
                        type="file"
                        id="marks-file-upload"
                        onChange={handleFileChange}
                        // Accept CSV, Excel sheets
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        style={{ display: 'none' }} 
                    />
                    
                    {selectedFile ? (
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151' }}>Marks File Selected:</p>
                            <p style={{ color: '#f59e0b', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '15rem', margin: '0 auto' }}>
                                {selectedFile.name}
                            </p>
                            <span style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem', display: 'block' }}>
                                Click here to select a different file.
                            </span>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <svg style={{ width: '2.5rem', height: '2.5rem', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.882-7.859A6 6 0 0115 6h.5a6 6 0 016 6v3a4 4 0 01-4 4H7z"></path>
                            </svg>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                                <span style={{ fontWeight: '600', color: '#4f46e5' }}>Click to upload</span> or drag and drop
                            </p>
                            <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>CSV, XLSX (Max 5MB)</p>
                        </div>
                    )}
                </label>

                {/* Submit Button */}
                <button
                    onClick={handleUpload}
                    disabled={!selectedFile || isLoading}
                    style={{
                        ...uploadButtonStyle,
                        ...(selectedFile && !isLoading ? enabledUploadButtonStyle : disabledUploadButtonStyle),
                    }}
                    onMouseOver={(e) => {
                        if (selectedFile && !isLoading) e.currentTarget.style.backgroundColor = '#3730a3'; // darker indigo
                    }}
                    onMouseOut={(e) => {
                        if (selectedFile && !isLoading) e.currentTarget.style.backgroundColor = enabledUploadButtonStyle.backgroundColor;
                    }}
                >
                    {isLoading ? (
                        <>
                            <svg 
                                style={{ animation: 'spin 1s linear infinite', marginRight: '0.75rem', height: '1.25rem', width: '1.25rem', color: 'white' }} 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            >
                                <defs>
                                    <style>{`
                                        @keyframes spin {
                                            from { transform: rotate(0deg); }
                                            to { transform: rotate(360deg); }
                                        }
                                    `}</style>
                                </defs>
                                <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Uploading...
                        </>
                    ) : 'Upload Marks Data'}
                </button>
            </div>

            {/* Custom Modal to display status */}
            <StatusModal 
                status={uploadStatus} 
                onClose={() => setUploadStatus(null)} 
            />
        </div>
    );
};

export default UploadMarks;
