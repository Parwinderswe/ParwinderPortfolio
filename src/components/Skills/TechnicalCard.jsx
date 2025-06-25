import React from 'react'

function TechnicalCard({language,percent}) {
  return (
    <div className="mb-6">
                            <div className="flex justify-between mb-1">
                                <span className="font-normal">{language}</span>
                                <span className="text-gray-600 dark:text-white">{percent}%</span>
                            </div>
                            <div className="w-full h-3 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-700">
                                <div className="h-full transition-all duration-1000 ease-out bg-purple-500 rounded-full"
                                style={{ width: `${percent}%` }}
                                ></div>
                            </div>
                        </div>
  )
}

export default TechnicalCard