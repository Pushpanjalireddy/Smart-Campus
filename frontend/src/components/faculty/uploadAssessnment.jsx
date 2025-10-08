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
 * Component responsible for handling assignment uploads by faculty members.
 * It provides a file selection area, tracks the selected file, and simulates
 * the upload process with status feedback.
 * * @param {object} props
 * @param {function} props.onBack - Function to navigate back to the dashboard.
 * @param {object} props.facultyData - Faculty member details (no longer passed as a destructured prop as it's unused).
 */
const UploadAssessment = ({ onBack /*, facultyData */ }) => { // Removed unused prop facultyData
    // State to hold the selected file object
    const [selectedFile, setSelectedFile] = useState(null);
    // State to manage the status/message shown after an action
    const [uploadStatus, setUploadStatus] = useState(null);
    // State to manage loading state during simulated upload
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Handles the file selection change event from the input.
     */
    const handleFileChange = (event) => {
        setUploadStatus(null);
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log('Selected file:', file.name);
        } else {
            setSelectedFile(null);
        }
    };

    /**
     * Simulates the assignment file submission process.
     */
    const handleUpload = () => {
        if (!selectedFile) {
            setUploadStatus({ type: 'error', message: 'Please select an assessment file first.' });
            return;
        }

        setIsLoading(true);
        // Simulate API call delay
        setTimeout(() => {
            setIsLoading(false);
            
            // Example check: file too large (10MB)
            const MAX_SIZE = 10 * 1024 * 1024;
            if (selectedFile.size > MAX_SIZE) { 
                setUploadStatus({ type: 'error', message: `File too large: ${selectedFile.name}. Max size is 10MB.` });
            } else {
                setUploadStatus({
                    type: 'success',
                    message: `Successfully uploaded assessment: ${selectedFile.name}!`
                });
                setSelectedFile(null); // Clear the file after successful upload
                // You might also want to reset the file input element here in a real application
            }
        }, 1500); // 1.5 second delay
    };

    const componentStyle = {
        minHeight: '100vh',
        backgroundColor: '#f9fafb', // bg-gray-50
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        fontFamily: 'Inter, sans-serif'
    };

    const cardStyle = {
        width: '100%',
        maxWidth: '32rem', // max-w-lg
        backgroundColor: 'white',
        padding: '2rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-xl
        borderRadius: '0.75rem', // rounded-xl
        border: '1px solid #f3f4f6', // border border-gray-100
        position: 'relative'
    };

    const buttonBaseStyle = {
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        transition: 'color 300ms',
    };

    const buttonHoverStyle = {
        color: '#4f46e5', // blue-500
    };

    const fileInputContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '12rem', // h-48
        padding: '1rem',
        transition: 'all 300ms ease-in-out',
        borderRadius: '0.5rem', // rounded-lg
        cursor: 'pointer',
        textAlign: 'center',
        borderStyle: selectedFile ? 'solid' : 'dashed',
        borderWidth: '2px',
        borderColor: selectedFile ? '#3b82f6' : '#d1d5db', // border-blue-500 : border-gray-300
        backgroundColor: selectedFile ? '#eff6ff' : 'transparent', // bg-blue-50 : transparent
    };

    const uploadButtonStyle = {
        marginTop: '1.5rem',
        width: '100%',
        padding: '0.75rem 0',
        fontSize: '1.125rem', // text-lg
        fontWeight: '600', // font-semibold
        borderRadius: '0.5rem', // rounded-lg
        transition: 'all 200ms',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    // Style for the Upload Button when enabled
    const enabledUploadButtonStyle = {
        backgroundColor: '#10b981', // bg-green-600
        color: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // shadow-md
    };

    // Style for the Upload Button when disabled/loading
    const disabledUploadButtonStyle = {
        backgroundColor: '#d1d5db', // bg-gray-300
        color: '#4b5563', // text-gray-600
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
                        color: '#6b7280', // text-gray-500
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = buttonHoverStyle.color}
                    onMouseOut={(e) => e.currentTarget.style.color = '#6b7280'}
                >
                    <ArrowLeft size={24} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <UploadCloud size={48} style={{ color: '#3b82f6', margin: '0 auto', marginBottom: '0.75rem' }} /> {/* text-blue-500 */}
                    <h2 style={{ fontSize: '1.875rem', fontWeight: '800', color: '#1f2937' }}>Upload Assessments</h2> {/* text-3xl font-extrabold */}
                    <p style={{ color: '#6b7280', marginTop: '0.5rem' }}> {/* text-gray-500 */}
                        Please upload your assignment file (e.g., PDF, DOCX, ZIP).
                    </p>
                </div>

                {/* File Dropzone / Input Area */}
                <label
                    htmlFor="assignment-file-upload"
                    style={{
                        ...fileInputContainerStyle,
                        ...(selectedFile ? { 
                            borderColor: '#3b82f6', 
                            backgroundColor: '#eff6ff' 
                        } : {
                            borderColor: '#d1d5db',
                            backgroundColor: 'transparent'
                        }),
                    }}
                    // Simulate hover effect manually for better UX, though inline styles are tricky for true hover states
                    onMouseOver={e => !selectedFile && (e.currentTarget.style.borderColor = '#60a5fa', e.currentTarget.style.backgroundColor = '#f3f4f6')}
                    onMouseOut={e => !selectedFile && (e.currentTarget.style.borderColor = '#d1d5db', e.currentTarget.style.backgroundColor = 'transparent')}
                >
                    {/* The hidden file input element */}
                    <input
                        type="file"
                        id="assignment-file-upload"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.zip"
                        style={{ display: 'none' }} 
                    />
                    
                    {selectedFile ? (
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151' }}>File Selected:</p>
                            <p style={{ color: '#2563eb', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '15rem', margin: '0 auto' }}>
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
                                <span style={{ fontWeight: '600', color: '#2563eb' }}>Click to upload</span> or drag and drop
                            </p>
                            <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>PDF, DOCX, or ZIP (Max 10MB)</p>
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
                        // Manual hover/active simulation for inline styles
                    }}
                    onMouseOver={(e) => {
                        if (selectedFile && !isLoading) e.currentTarget.style.backgroundColor = '#059669'; // darker green
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
                    ) : 'Submit Assessment'}
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

export default UploadAssessment;
